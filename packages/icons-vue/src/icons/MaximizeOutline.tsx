// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeOutlineSvg from '@ant-design/icons-svg/lib/asn/MaximizeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeOutline: MaximizeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeOutlineSvg}></AntdIcon>;
};

MaximizeOutline.displayName = 'MaximizeOutline';
MaximizeOutline.inheritAttrs = false;
export default MaximizeOutline;