// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignVerticallyLinearSvg from '@ant-design/icons-svg/lib/asn/AlignVerticallyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignVerticallyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignVerticallyLinear: AlignVerticallyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignVerticallyLinearSvg}></AntdIcon>;
};

AlignVerticallyLinear.displayName = 'AlignVerticallyLinear';
AlignVerticallyLinear.inheritAttrs = false;
export default AlignVerticallyLinear;