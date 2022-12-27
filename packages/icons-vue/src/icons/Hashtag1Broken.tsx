// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hashtag1BrokenSvg from '@ant-design/icons-svg/lib/asn/Hashtag1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hashtag1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hashtag1Broken: Hashtag1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hashtag1BrokenSvg}></AntdIcon>;
};

Hashtag1Broken.displayName = 'Hashtag1Broken';
Hashtag1Broken.inheritAttrs = false;
export default Hashtag1Broken;