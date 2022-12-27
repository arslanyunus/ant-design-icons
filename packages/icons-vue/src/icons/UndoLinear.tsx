// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UndoLinearSvg from '@ant-design/icons-svg/lib/asn/UndoLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UndoLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UndoLinear: UndoLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoLinearSvg}></AntdIcon>;
};

UndoLinear.displayName = 'UndoLinear';
UndoLinear.inheritAttrs = false;
export default UndoLinear;