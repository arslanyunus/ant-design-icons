// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import House2TwoToneSvg from '@ant-design/icons-svg/lib/asn/House2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface House2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const House2TwoTone: House2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={House2TwoToneSvg}></AntdIcon>;
};

House2TwoTone.displayName = 'House2TwoTone';
House2TwoTone.inheritAttrs = false;
export default House2TwoTone;