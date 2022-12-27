// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Rotate3DBulkSvg from '@ant-design/icons-svg/lib/asn/Rotate3DBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Rotate3DBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Rotate3DBulk: Rotate3DBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Rotate3DBulkSvg}></AntdIcon>;
};

Rotate3DBulk.displayName = 'Rotate3DBulk';
Rotate3DBulk.inheritAttrs = false;
export default Rotate3DBulk;