// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home2BoldSvg from '@ant-design/icons-svg/lib/asn/Home2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home2Bold: Home2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home2BoldSvg}></AntdIcon>;
};

Home2Bold.displayName = 'Home2Bold';
Home2Bold.inheritAttrs = false;
export default Home2Bold;