// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveAddBoldSvg from '@ant-design/icons-svg/lib/asn/SaveAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveAddBold: SaveAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveAddBoldSvg}></AntdIcon>;
};

SaveAddBold.displayName = 'SaveAddBold';
SaveAddBold.inheritAttrs = false;
export default SaveAddBold;