// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PeopleBoldSvg from '@ant-design/icons-svg/lib/asn/PeopleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PeopleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PeopleBold: PeopleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PeopleBoldSvg}></AntdIcon>;
};

PeopleBold.displayName = 'PeopleBold';
PeopleBold.inheritAttrs = false;
export default PeopleBold;