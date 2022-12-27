// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UndoOutlineSvg from '@ant-design/icons-svg/lib/asn/UndoOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UndoOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UndoOutline: UndoOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoOutlineSvg}></AntdIcon>;
};

UndoOutline.displayName = 'UndoOutline';
UndoOutline.inheritAttrs = false;
export default UndoOutline;