function validate(data) {
    
    const validateName = (name) => {
      const regex = new RegExp(/^[0-9,$]*$/);
      return regex.test(name)
    }
      let errors = {};
      if (!data.name || data.name.length > 10)  errors.name = "No more than 10 characters!";
      if (validateName(data.name)) errors.name = "Name is required and must contain only letters!";
      if (!/.(gif|jpeg|jpg|png)$/i.test(data.image) && data.image !== "") { errors.image = "Must be a image url with format jpg, gif, png!";}
      if (!data.description || data.description.length < 20) errors.description = "Description must be at least 20 characters!";
      return errors;
    }
    
  export default validate;