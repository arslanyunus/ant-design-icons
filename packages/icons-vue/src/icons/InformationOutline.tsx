// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InformationOutlineSvg from '@ant-design/icons-svg/lib/asn/InformationOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InformationOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InformationOutline: InformationOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationOutlineSvg}></AntdIcon>;
};

InformationOutline.displayName = 'InformationOutline';
InformationOutline.inheritAttrs = false;
export default InformationOutline;