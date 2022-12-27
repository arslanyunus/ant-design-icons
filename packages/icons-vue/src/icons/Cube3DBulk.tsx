// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Cube3DBulkSvg from '@ant-design/icons-svg/lib/asn/Cube3DBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Cube3DBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Cube3DBulk: Cube3DBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Cube3DBulkSvg}></AntdIcon>;
};

Cube3DBulk.displayName = 'Cube3DBulk';
Cube3DBulk.inheritAttrs = false;
export default Cube3DBulk;