// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlimitedTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlimitedTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlimitedTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlimitedTwoTone: UnlimitedTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlimitedTwoToneSvg}></AntdIcon>;
};

UnlimitedTwoTone.displayName = 'UnlimitedTwoTone';
UnlimitedTwoTone.inheritAttrs = false;
export default UnlimitedTwoTone;