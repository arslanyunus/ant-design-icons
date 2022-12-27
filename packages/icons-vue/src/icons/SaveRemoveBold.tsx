// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/SaveRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveRemoveBold: SaveRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveRemoveBoldSvg}></AntdIcon>;
};

SaveRemoveBold.displayName = 'SaveRemoveBold';
SaveRemoveBold.inheritAttrs = false;
export default SaveRemoveBold;