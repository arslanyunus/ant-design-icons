// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Money3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money3TwoTone: Money3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money3TwoToneSvg}></AntdIcon>;
};

Money3TwoTone.displayName = 'Money3TwoTone';
Money3TwoTone.inheritAttrs = false;
export default Money3TwoTone;