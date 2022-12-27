// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Money4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money4TwoTone: Money4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money4TwoToneSvg}></AntdIcon>;
};

Money4TwoTone.displayName = 'Money4TwoTone';
Money4TwoTone.inheritAttrs = false;
export default Money4TwoTone;