// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UndoTwoToneSvg from '@ant-design/icons-svg/lib/asn/UndoTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UndoTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UndoTwoTone: UndoTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoTwoToneSvg}></AntdIcon>;
};

UndoTwoTone.displayName = 'UndoTwoTone';
UndoTwoTone.inheritAttrs = false;
export default UndoTwoTone;