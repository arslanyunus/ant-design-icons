// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3DBulkSvg from '@ant-design/icons-svg/lib/asn/Square3DBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3DBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3DBulk: Square3DBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3DBulkSvg}></AntdIcon>;
};

Square3DBulk.displayName = 'Square3DBulk';
Square3DBulk.inheritAttrs = false;
export default Square3DBulk;