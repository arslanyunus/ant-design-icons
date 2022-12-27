// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateMusicBulkSvg from '@ant-design/icons-svg/lib/asn/RepeateMusicBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateMusicBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateMusicBulk: RepeateMusicBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateMusicBulkSvg}></AntdIcon>;
};

RepeateMusicBulk.displayName = 'RepeateMusicBulk';
RepeateMusicBulk.inheritAttrs = false;
export default RepeateMusicBulk;