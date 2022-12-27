// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Buildings2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Buildings2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Buildings2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Buildings2TwoTone: Buildings2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Buildings2TwoToneSvg}></AntdIcon>;
};

Buildings2TwoTone.displayName = 'Buildings2TwoTone';
Buildings2TwoTone.inheritAttrs = false;
export default Buildings2TwoTone;