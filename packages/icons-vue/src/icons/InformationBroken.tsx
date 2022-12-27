// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InformationBrokenSvg from '@ant-design/icons-svg/lib/asn/InformationBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InformationBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InformationBroken: InformationBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationBrokenSvg}></AntdIcon>;
};

InformationBroken.displayName = 'InformationBroken';
InformationBroken.inheritAttrs = false;
export default InformationBroken;