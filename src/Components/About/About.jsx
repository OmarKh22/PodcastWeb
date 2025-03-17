import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h3" component="h1" align="right" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          عن منصة إلهام
        </Typography>
        
        <Box sx={{ textAlign: 'right', direction: 'rtl' }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            منصة إلهام.. حيث يلتقي الإلهام بالإبداع
          </Typography>
          
          <Typography paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            لطالما أُحطنا بشخصيات ملهمة، تركت بصماتها في مختلف المجالات، لكن بعضها ظلت خلف الكواليس بعيدًا عن الأضواء.
          </Typography>
          
          <Typography paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            أشخاص يملكون قصصًا تستحق أن تُروى، وتجارب مليئة بالدروس، لكن لم تتح لنا فرصة التعرف عليهم عن قرب أو الاستفادة من رحلاتهم الملهمة.
          </Typography>
          
          <Typography paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            من هنا، وُلدت منصة إلهام، برؤية واضحة ورسالة سامية: دعم الملهمين. نؤمن أن لكل شخص قصة تستحق أن تُسمع، ولكل تجربة قيمة يمكن أن تكون شرارة إلهام لغيره.
          </Typography>
          
          <Typography paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            لذا، قررنا أن نسلط الضوء على هذه الشخصيات، ونعطيها المساحة التي تستحقها، لنكون جسرًا بين الإلهام وأولئك الذين يبحثون عنه.
          </Typography>
          
          <Typography paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            في منصة إلهام، لا نكتفي بمشاركة قصص النجاح، بل نؤمن بتأثيرها العميق في تحفيز العقول، وإشعال الشغف، ودفع الآخرين لخوض تجاربهم الخاصة بروح ملهمة.
          </Typography>
          
          <Typography paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            وهكذا، تستمر مسيرة الإلهام، من شخص إلى آخر، ومن جيل إلى جيل.
          </Typography>
          
          <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', mt: 6 }}>
            منصة إلهام.. حيث يلتقي الإلهام بالإبداع، وتُروى القصص التي تستحق أن تُسمع..
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;