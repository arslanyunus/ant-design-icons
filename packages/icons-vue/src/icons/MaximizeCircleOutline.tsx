// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/MaximizeCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeCircleOutline: MaximizeCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeCircleOutlineSvg}></AntdIcon>;
};

MaximizeCircleOutline.displayName = 'MaximizeCircleOutline';
MaximizeCircleOutline.inheritAttrs = false;
export default MaximizeCircleOutline;