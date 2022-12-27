// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CupOutlineSvg from '@ant-design/icons-svg/lib/asn/CupOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CupOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CupOutline: CupOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupOutlineSvg}></AntdIcon>;
};

CupOutline.displayName = 'CupOutline';
CupOutline.inheritAttrs = false;
export default CupOutline;