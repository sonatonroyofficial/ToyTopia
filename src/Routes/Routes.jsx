
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            errorElement: <Error></Error>,
            children: [
                {
                    index: true,
                    element: <Home></Home>,
                }
            ]
        },
        {
            path: "product",
            element: <h2>Product page</h2>
        },
          
        {
            path: "auth",
            element: <h3>auth</h3>
            
              
            
        },
        {
            path: "contact",
            element: <h3>contact page</h3>
            
        },
        {
            path: "card",
            element: h2<Card></Card>
           
        }
    
    ]