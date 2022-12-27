// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Eraser1BoldSvg from '@ant-design/icons-svg/lib/asn/Eraser1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Eraser1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Eraser1Bold: Eraser1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eraser1BoldSvg}></AntdIcon>;
};

Eraser1Bold.displayName = 'Eraser1Bold';
Eraser1Bold.inheritAttrs = false;
export default Eraser1Bold;