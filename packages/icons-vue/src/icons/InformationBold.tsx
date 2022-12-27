// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InformationBoldSvg from '@ant-design/icons-svg/lib/asn/InformationBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InformationBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InformationBold: InformationBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationBoldSvg}></AntdIcon>;
};

InformationBold.displayName = 'InformationBold';
InformationBold.inheritAttrs = false;
export default InformationBold;