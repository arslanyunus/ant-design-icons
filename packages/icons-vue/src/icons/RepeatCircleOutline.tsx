// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/RepeatCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatCircleOutline: RepeatCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatCircleOutlineSvg}></AntdIcon>;
};

RepeatCircleOutline.displayName = 'RepeatCircleOutline';
RepeatCircleOutline.inheritAttrs = false;
export default RepeatCircleOutline;