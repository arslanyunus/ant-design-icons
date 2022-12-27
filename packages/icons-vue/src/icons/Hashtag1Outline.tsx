// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hashtag1OutlineSvg from '@ant-design/icons-svg/lib/asn/Hashtag1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hashtag1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hashtag1Outline: Hashtag1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hashtag1OutlineSvg}></AntdIcon>;
};

Hashtag1Outline.displayName = 'Hashtag1Outline';
Hashtag1Outline.inheritAttrs = false;
export default Hashtag1Outline;