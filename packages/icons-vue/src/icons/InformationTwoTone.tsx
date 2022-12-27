// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InformationTwoToneSvg from '@ant-design/icons-svg/lib/asn/InformationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InformationTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InformationTwoTone: InformationTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationTwoToneSvg}></AntdIcon>;
};

InformationTwoTone.displayName = 'InformationTwoTone';
InformationTwoTone.inheritAttrs = false;
export default InformationTwoTone;