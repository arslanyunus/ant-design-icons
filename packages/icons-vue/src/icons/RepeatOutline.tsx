// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatOutlineSvg from '@ant-design/icons-svg/lib/asn/RepeatOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatOutline: RepeatOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatOutlineSvg}></AntdIcon>;
};

RepeatOutline.displayName = 'RepeatOutline';
RepeatOutline.inheritAttrs = false;
export default RepeatOutline;