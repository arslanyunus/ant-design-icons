// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CakeOutlineSvg from '@ant-design/icons-svg/lib/asn/CakeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CakeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CakeOutline: CakeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeOutlineSvg}></AntdIcon>;
};

CakeOutline.displayName = 'CakeOutline';
CakeOutline.inheritAttrs = false;
export default CakeOutline;