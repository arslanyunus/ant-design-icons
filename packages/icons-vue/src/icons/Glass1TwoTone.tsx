// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Glass1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Glass1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Glass1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Glass1TwoTone: Glass1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Glass1TwoToneSvg}></AntdIcon>;
};

Glass1TwoTone.displayName = 'Glass1TwoTone';
Glass1TwoTone.inheritAttrs = false;
export default Glass1TwoTone;