// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveAddBrokenSvg from '@ant-design/icons-svg/lib/asn/SaveAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveAddBroken: SaveAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveAddBrokenSvg}></AntdIcon>;
};

SaveAddBroken.displayName = 'SaveAddBroken';
SaveAddBroken.inheritAttrs = false;
export default SaveAddBroken;