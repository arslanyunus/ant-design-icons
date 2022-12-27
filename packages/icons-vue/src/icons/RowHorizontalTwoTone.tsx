// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowHorizontalTwoToneSvg from '@ant-design/icons-svg/lib/asn/RowHorizontalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowHorizontalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowHorizontalTwoTone: RowHorizontalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowHorizontalTwoToneSvg}></AntdIcon>;
};

RowHorizontalTwoTone.displayName = 'RowHorizontalTwoTone';
RowHorizontalTwoTone.inheritAttrs = false;
export default RowHorizontalTwoTone;