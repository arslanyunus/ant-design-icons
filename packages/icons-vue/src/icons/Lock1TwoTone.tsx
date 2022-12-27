// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lock1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Lock1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lock1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lock1TwoTone: Lock1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock1TwoToneSvg}></AntdIcon>;
};

Lock1TwoTone.displayName = 'Lock1TwoTone';
Lock1TwoTone.inheritAttrs = false;
export default Lock1TwoTone;