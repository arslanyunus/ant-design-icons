// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JudgeBulkSvg from '@ant-design/icons-svg/lib/asn/JudgeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JudgeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JudgeBulk: JudgeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JudgeBulkSvg}></AntdIcon>;
};

JudgeBulk.displayName = 'JudgeBulk';
JudgeBulk.inheritAttrs = false;
export default JudgeBulk;