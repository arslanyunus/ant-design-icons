// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneysOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneysOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneysOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneysOutline: MoneysOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneysOutlineSvg}></AntdIcon>;
};

MoneysOutline.displayName = 'MoneysOutline';
MoneysOutline.inheritAttrs = false;
export default MoneysOutline;