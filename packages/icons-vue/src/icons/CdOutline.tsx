// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CdOutlineSvg from '@ant-design/icons-svg/lib/asn/CdOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CdOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CdOutline: CdOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CdOutlineSvg}></AntdIcon>;
};

CdOutline.displayName = 'CdOutline';
CdOutline.inheritAttrs = false;
export default CdOutline;