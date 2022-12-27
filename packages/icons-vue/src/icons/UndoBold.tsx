// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UndoBoldSvg from '@ant-design/icons-svg/lib/asn/UndoBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UndoBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UndoBold: UndoBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoBoldSvg}></AntdIcon>;
};

UndoBold.displayName = 'UndoBold';
UndoBold.inheritAttrs = false;
export default UndoBold;