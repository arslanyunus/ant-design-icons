// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowVerticalTwoToneSvg from '@ant-design/icons-svg/lib/asn/RowVerticalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowVerticalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowVerticalTwoTone: RowVerticalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowVerticalTwoToneSvg}></AntdIcon>;
};

RowVerticalTwoTone.displayName = 'RowVerticalTwoTone';
RowVerticalTwoTone.inheritAttrs = false;
export default RowVerticalTwoTone;