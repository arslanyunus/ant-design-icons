// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Home2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home2TwoTone: Home2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home2TwoToneSvg}></AntdIcon>;
};

Home2TwoTone.displayName = 'Home2TwoTone';
Home2TwoTone.inheritAttrs = false;
export default Home2TwoTone;