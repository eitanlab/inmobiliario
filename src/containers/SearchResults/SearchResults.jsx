import React, { useState, useEffect } from "react";
import useLocalStorage from '../../hooks/useLocalStorage';
import moment from 'moment';
import { mockedPostings } from '../../___mock__/mockedPostings';
import Sidebar from "../../components/Sidebar/Sidebar";
import Postings from "../../components/Postings/Postings";
import { Container, Box } from "@material-ui/core";
import ContactForm from '../../components/ContactForm/ContactForm';

const SearchResults = (props) => {
  const [postings, setPostings] = useState([]);
  const [operationType, setOperationType] = useLocalStorage('operationType','0');
  const [address, setAddress] = useLocalStorage('address','');
  const [searchByAdress, setSearchByAdress] = useState(false);
  const [postingsToShow, setPostingsToShow] = useState([]);
  const [wishlist, setWishlist] = useLocalStorage('wishlist',[]);
  const [openContactForm, setOpenContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({nombre: '', telefono: '', email: ''});
  const [contactFormStatus, setContactFormStatus] = useState('ready');
  const [contacts, setContacts] = useState([]);

  const contactFormInitialState = {nombre: '', telefono: '', email: ''};

  useEffect(() => {
    setContactForm(contactFormInitialState);
  }, []);

  useEffect(() => {
      setWishlist([])
      const getPostings = async () => {
        try {
          mockedPostings.map(post => {
            const curatedPost = {};
            curatedPost['id'] = post.posting_id;
            curatedPost['prices'] = {
              price: setPostPrices(post.posting_prices[0].price),
              expenses: setPostPrices(post.posting_prices[0].expenses)
            }
            curatedPost['location'] = setPostLocation(post.posting_location);
            curatedPost['title'] = post.title;
            curatedPost['slug'] = post.posting_slug;
            curatedPost['description'] = post.posting_description;
            curatedPost['plan'] = setPostPublicationPlan(post.publication_plan);
            curatedPost['daysPublished'] = setPostDaysPublished(post.publish_date);
            curatedPost['picture'] = post.posting_picture;
            curatedPost['operationType'] = post.operation_type.operation_type_id.toString();
            setPostings(postings => [...postings,curatedPost]);
          });
        } catch (error) {
          alert(`No se pueden cargar propiedades - Error(${error})`);
        }
      };
      getPostings();
  }, []);

  useEffect(() => {
    const filteredPostings = postings.filter(post => {
      if(operationType !== '0' && operationType !== post.operationType) {
        return false;
      }
      if(address !== "" && !post.location.toLowerCase().includes(address.toLowerCase())) {
        return false;
      }
      return true;
    });
    setSearchByAdress(false);
    setPostingsToShow(filteredPostings);
  }, [operationType, searchByAdress, postings]);

  const setPostPrices = value => {
    if (value) {
      return value.amount.toLocaleString('es-AR', {
          style: 'currency',
          currency: value.currency,
          minimumFractionDigits: 0,
      });
    }
  }

  const handleFilterChange = (e) => {
    switch (e.target.name) {
      case 'operationType':
        setOperationType(e.target.value);
        break;
        case 'address':
          setAddress(e.target.value);
          break;
      default:
        break;
    }
  }

  const handleSearchByAddress = () => {
    setSearchByAdress(true);
  }

  const handleFavoriteClick = id => {
      if(wishlist.includes(id)) {
        const newWishlist = wishlist.filter( wishItem => wishItem !== id );
        setWishlist(newWishlist);
        
      } else {
        setWishlist([...wishlist,id]);
      }
  }

  const setPostLocation = location => {
    if (location) {
      return `${location.address}, ${location.zone}, ${location.city}`
    }
  }

  const setPostPublicationPlan = plan => {
		switch(plan) {
			case 'SIMPLE':
				return {
					type: 'Simple',
					color: ''
				};
			case 'HIGHLIGHTED':
				return {
					type: 'Destacado',
					color: '#31d1a1'
				};
			case 'SUPERHIGHLIGHTED':
				return {
					type: 'Súper destacado',
					color: '#9371e0'
				};
			default:
				return null;
		} 
  }

  const setPostDaysPublished = date => {
    if (date) {
      const publishedDate = moment(date, 'DD/MM/YYYY').format();
      const timeDiff  = (new Date()) - (new Date(publishedDate));
      return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    }
  } 

  const handleContactFormOpen = () => {
    setOpenContactForm(true);
  };

  const handleContactFormClose = () => {
    setOpenContactForm(false);
    setContactFormStatus('ready');
  };

  const handleFieldChange = (e) => {
    setContactForm({...contactForm, [e.target.name]: e.target.value});
  }

  const handleSubmitContact = (e) => {
    if(Object.values(contactForm).includes('')) {
      setContactFormStatus('ready');
      return;
    }
    const duplicatedContact = contacts.filter(contact => (contact.email === contactForm.email));
    if (contacts.length > 0 && duplicatedContact) {
      setContactFormStatus('duplicated');
      setContactForm(contactFormInitialState);
      return;
    }
    setContacts([...contacts,contactForm]);
    setContactFormStatus('success');
    setContactForm(contactFormInitialState);
  }

  return (
    <Container>
      <ContactForm 
        open={openContactForm} 
        handleClose={handleContactFormClose}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmitContact}
        formFields={contactForm}
        formStatus={contactFormStatus} />
      <Box display="flex" paddingTop={5}>
        <Box minWidth={300} width={300} marginRight={2}>
          <Sidebar 
            operationType={operationType}
            address={address} 
            onFilterChange={handleFilterChange}
            searchByAddress={handleSearchByAddress} />
        </Box>
        <Box flexGrow={1}>
          <Postings 
            favoriteClicked={handleFavoriteClick}  
            postingList={postingsToShow} 
            onWishlist={wishlist}
            handleContactFormOpen={handleContactFormOpen} />
        </Box>
      </Box>
    </Container>
  );
};

export default SearchResults;
