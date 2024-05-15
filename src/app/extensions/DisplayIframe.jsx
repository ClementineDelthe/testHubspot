import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";


// Define the extension to be run within the Hubspot CRM
hubspot.extend((
  { actions } // serverless function is not required for simply displaying an iframe
) => <Extension openIframe={actions.openIframeModal} />);

// Define the Extension component, taking in openIframe as a prop
const Extension = ({ openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://visence-web.loginline.dev/status?application=freshdesk&token=67d04aa2-7796-49be-bd25-a8a7cf6aa243&email=demo@visence.co", // this is a relative link. Some links will be blocked since they don't allow iframing
      height: 250,
      width: 200,
      title: 'test clem',
      flush: true,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, possimus? Autem exercitationem totam enim minus quos reprehenderit recusandae incidunt ut aliquam dolor cumque, doloremque voluptas sequi dolorum.
        </Text>

        <Box>
          <Button type="submit" onClick={handleClick}>
            Click me
          </Button>

        </Box>
      </Flex>
    </>
  );
};
