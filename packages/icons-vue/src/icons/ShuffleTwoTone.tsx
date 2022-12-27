// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShuffleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShuffleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShuffleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShuffleTwoTone: ShuffleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShuffleTwoToneSvg}></AntdIcon>;
};

ShuffleTwoTone.displayName = 'ShuffleTwoTone';
ShuffleTwoTone.inheritAttrs = false;
export default ShuffleTwoTone;