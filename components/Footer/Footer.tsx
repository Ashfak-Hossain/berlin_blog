import SectionContainer from '@/components/common/SectionContainer';

const Footer = () => {
  return (
    <div className="border-surface-0 bg-surface-3 mt-20 border-t-2 py-16 text-sm">
      <SectionContainer>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-center md:ml-8 md:text-left">
            <p className="text-surface-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Footer;
