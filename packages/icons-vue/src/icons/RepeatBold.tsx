// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatBoldSvg from '@ant-design/icons-svg/lib/asn/RepeatBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatBold: RepeatBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatBoldSvg}></AntdIcon>;
};

RepeatBold.displayName = 'RepeatBold';
RepeatBold.inheritAttrs = false;
export default RepeatBold;