// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UndoBrokenSvg from '@ant-design/icons-svg/lib/asn/UndoBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UndoBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UndoBroken: UndoBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoBrokenSvg}></AntdIcon>;
};

UndoBroken.displayName = 'UndoBroken';
UndoBroken.inheritAttrs = false;
export default UndoBroken;