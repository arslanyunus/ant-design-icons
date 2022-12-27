// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/SaveRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveRemoveBroken: SaveRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveRemoveBrokenSvg}></AntdIcon>;
};

SaveRemoveBroken.displayName = 'SaveRemoveBroken';
SaveRemoveBroken.inheritAttrs = false;
export default SaveRemoveBroken;