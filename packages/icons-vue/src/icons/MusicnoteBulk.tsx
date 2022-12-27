// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicnoteBulkSvg from '@ant-design/icons-svg/lib/asn/MusicnoteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicnoteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicnoteBulk: MusicnoteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicnoteBulkSvg}></AntdIcon>;
};

MusicnoteBulk.displayName = 'MusicnoteBulk';
MusicnoteBulk.inheritAttrs = false;
export default MusicnoteBulk;