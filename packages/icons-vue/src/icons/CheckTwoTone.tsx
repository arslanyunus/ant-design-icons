// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckTwoTone: CheckTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckTwoToneSvg}></AntdIcon>;
};

CheckTwoTone.displayName = 'CheckTwoTone';
CheckTwoTone.inheritAttrs = false;
export default CheckTwoTone;