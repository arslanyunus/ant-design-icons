// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectUpOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectUpOutline: DirectUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectUpOutlineSvg}></AntdIcon>;
};

DirectUpOutline.displayName = 'DirectUpOutline';
DirectUpOutline.inheritAttrs = false;
export default DirectUpOutline;